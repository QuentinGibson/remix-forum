import { Link, useLoaderData } from "@remix-run/react";
import { LoaderArgs, json } from "@remix-run/server-runtime";
import Avatar from "react-avatar";
import { BsArrowLeft, BsBell, BsBellFill } from "react-icons/bs";

export const loader = async ({ request, params }: LoaderArgs) => {
  const data = [
    {
      id: '1',
      createdBy: new Date(2022, 10, 11, 22, 30).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      sender: "Admin",
      reciever: "Taylor",
      content: "need to see that"
    },
    {
      id: '2',
      createdBy: new Date(2022, 10, 11, 22, 45).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      sender: "Taylor",
      receiver: "Admin",
      content: "What do you need to see?"
    },
    {
      id: '3',
      createdBy: new Date(2022, 10, 11, 23, 0).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      sender: "Admin",
      receiver: "Taylor",
      content: "The new report that was just released."
    },
    {
      id: '4',
      createdBy: new Date(2022, 10, 12, 8, 15).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      sender: "Admin",
      receiver: "Taylor",
      content: "Did you get a chance to look at the report?"
    },
    {
      id: '5',
      createdBy: new Date(2022, 10, 12, 9, 30).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      sender: "Taylor",
      receiver: "Admin",
      content: "Yes, I reviewed it this morning."
    },
    {
      id: '6',
      createdBy: new Date(2022, 10, 12, 11, 0).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      sender: "Admin",
      receiver: "Taylor",
      content: "What did you think?"
    },
    {
      id: '7',
      createdBy: new Date(2022, 10, 12, 11, 15).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      sender: "Taylor",
      receiver: "Admin",
      content: "Overall, I thought it was a good analysis."
    },
    {
      id: '8',
      createdBy: new Date(2022, 10, 12, 12, 30).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      sender: "Admin",
      receiver: "Taylor",
      content: "Glad to hear it. We worked hard on that report."
    },
    {
      id: '9',
      createdBy: new Date(2022, 10, 13, 9, 0).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      sender: "Taylor",
      receiver: "Admin",
      content: "Can we schedule a meeting to discuss the next steps?"
    },
    {
      id: '10',
      createdBy: new Date(2022, 10, 13, 10, 15).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      sender: "Admin",
      receiver: "Taylor",
      content: "Sure, let's aim for next Tuesday at 2 PM."
    },
    {
      id: '11',
      createdBy: new Date(2022, 10, 13, 10, 30).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      sender: "Taylor",
      receiver: "Admin",
      content: "That works for me. Thank you."
    },
    {
      id: '12',
      createdBy: new Date(2022, 10, 13, 10, 45).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      sender: "Admin",
      receiver: "Taylor",
      content: "You're welcome. I'll send you a calendar invite shortly."
    }
  ]
  return json({ history: data.sort((a, b) => new Date(b.createdBy).getTime() + new Date(a.createdBy).getTime()) })
};
function Messages({ messages }: any) {
  // Set a timestamp for the first message in the array
  // this is the first date of the conversation
  let timeStamp = messages[0]
  let RenderArray = [];
  const MessageElement = (message: any) => (
    <div key={message.id} className="tt-item">
      <div className="tt-col-avatar">
        <svg className="tt-icon">
          <use xlinkHref="#icon-ava-a" />
        </svg>
        <Avatar round size="40" name={message.sender} maxInitials={1} />
      </div>
      <div className="tt-col-description">
        <h4 className="tt-title">
          <Link to={`/user/${message.id}`}>{message.sender}</Link> <span className="time">{message.createdBy}</span>
        </h4>
        <p>{message.content}</p>
      </div>
    </div>
  )

  const TimeStampElement = (timestamp: Date, key: string) => {

    return (
      <div key={key} className="tt-item-title">
        <span>{timestamp.toString()}</span>
      </div>
    )
  }
  // Loop through the messages array
  for (let i = 0; i < messages.length; i++) {
    // If the current message is the first message in the array
    // or the current message has a different date than the previous message
    // then we want to render a timestamp
    if (i === 0 || messages[i].createdBy !== messages[i - 1].createdBy) {
      // Push the timestamp to the RenderArray
      RenderArray.push(TimeStampElement(messages[i].createdBy, `${messages[i].id} + 'timestamp'`))
    }
    // Push the message to the RenderArray
    RenderArray.push(MessageElement(messages[i]))
  }
  return (
    <>
      {RenderArray}
    </>
  )

}
export default function ConversationRoute() {
  const { history } = useLoaderData<typeof loader>();
  return (
    <>
      <div className="tt-title-content">
        <h2 className="tt-title">Taylor</h2>
        <div className="tt-description">Last seen 3h ago</div>
      </div>
      <div className="tt-list-time-topic">
        <Messages messages={history} />
      </div>
      <div className="tt-wrapper-inner">
        <div className="pt-editor form-default">

          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              rows={5}
              placeholder="Write your message here"
              defaultValue={""}
            />
          </div>
          <div className="pt-row">
            <div className="col-auto ml-auto">
              <a href="#" className="btn btn-secondary btn-custom">
                Send
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}