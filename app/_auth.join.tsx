import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";

import { getUserId, createUserSession } from "~/session.server";

import { createUser, getUserByEmail } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

  if (!validateEmail(email)) {
    return json(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json(
      {
        errors: {
          email: "A user already exists with this email",
          password: null,
        },
      },
      { status: 400 }
    );
  }

  const user = await createUser(email, password);

  return createUserSession({
    request,
    userId: user.id,
    remember: false,
    redirectTo,
  });
}

export const meta: V2_MetaFunction = () => [{ title: "Sign Up" }];

export default function Join() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const actionData = useActionData<typeof action>();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
   <main id="tt-pageContent" className="tt-offset-none">
  <div className="container">
    <div className="tt-loginpages-wrapper">
      <div className="tt-loginpages">
        <a href="index.html" className="tt-block-title">
          <img src="images/logo.png" alt="" />
          <div className="tt-title">Welcome to Forum19</div>
          <div className="tt-description">
            Join the forum to unlock true power of community.
          </div>
        </a>
        <form className="form-default">
          <div className="form-group">
            <label htmlFor="loginUserName">Username</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="loginUserName"
              placeholder="azyrusmax"
            />
          </div>
          <div className="form-group">
            <label htmlFor="loginUserEmail">Email</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="loginUserEmail"
              placeholder="Sample@sample.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="loginUserPassword">Password</label>
            <input
              type="password"
              name="name"
              className="form-control"
              id="loginUserPassword"
              placeholder="************"
            />
          </div>
          <div className="form-group">
            <a href="#" className="btn btn-secondary btn-block">
              Create my account
            </a>
          </div>
          <p>Or signup with social network</p>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <a href="#" className="btn btn-color01 btn-secondary btn-block">
                  <i>
                    <svg className="icon">
                      <use xlinkHref="#facebook-f-brands" />
                    </svg>
                  </i>
                  Facebook
                </a>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <a href="#" className="btn btn-color02 btn-block">
                  <i>
                    <svg className="icon">
                      <use xlinkHref="#twitter-brands" />
                    </svg>
                  </i>
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <p>
            Already have an account?{" "}
            <a href="#" className="tt-underline">
              Login here
            </a>
          </p>
          <div className="tt-notes">
            By signing up, signing in or continuing, I agree to Forum19’s{" "}
            <a href="#" className="tt-underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="tt-underline">
              Privacy Policy.
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</main>
 
  )
    {/* <div className="flex min-h-full flex-col justify-center">
      <div className="mx-auto w-full max-w-md px-8">
        <Form method="post" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                ref={emailRef}
                id="email"
                required
                autoFocus={true}
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-describedby="email-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.email && (
                <div className="pt-1 text-red-700" id="email-error">
                  {actionData.errors.email}
                </div>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                ref={passwordRef}
                name="password"
                type="password"
                autoComplete="new-password"
                aria-invalid={actionData?.errors?.password ? true : undefined}
                aria-describedby="password-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.password && (
                <div className="pt-1 text-red-700" id="password-error">
                  {actionData.errors.password}
                </div>
              )}
            </div>
          </div>

          $&/
          <button
            type="submit"
            className="w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
          >
            Create Account
          </button>
          <div className="flex items-center justify-center">
            <div className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                className="text-blue-500 underline"
                to={{
                  pathname: "/login",
                  search: searchParams.toString(),
                }}
              >
                Log in
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div> */}
}
