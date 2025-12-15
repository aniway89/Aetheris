import MessageHader from '@/app/(no-navbar)/(Chat)/message/components/MessageHader';
import Userchat from '../components/Userchat';
import YourChat from '../components/YourChat';
import TextArea from '../components/TextArea';
import SmallSlidingWindows from '../../Vc/Components/SmallSlidingWindows';
import Vclog from '../components/Vclog';

interface Props {
  params: {
    userID: string;
  };
}

export default function ChatPage({ params }: Props) {
  return (
    <div className="flex flex-col w-full h-[100dvh] bg-black overflow-hidden">
      {/* <SmallSlidingWindows/> */}
      <MessageHader />

      {/* Chat Scroll Area */}
      <div className="MessageBOX flex-1 overflow-y-scroll overflow-x-hidden scollabar-hide px-2 py-2">
        <Userchat />
        <YourChat />
        <Userchat />
        <Userchat />
        <YourChat />
        <YourChat />
        <Userchat />
        <YourChat />
        <Userchat />
        <YourChat />
        <Userchat />
        <Userchat />
        <YourChat />
        <Vclog/>
      </div>

      <TextArea />
      
    </div>
  );
}
