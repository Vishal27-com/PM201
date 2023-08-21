import { action } from "@storybook/addon-actions";
import StatusBar from "../Components/StatusBar"; // 1
import { withKnobs, text, select } from '@storybook/addon-knobs';
// Meta 2
export default {
  title: "StatusBar",
  component:StatusBar,
  decorators:[withKnobs],
  argTypes: {
    type: {
      control: "radio"
    }
  }
}
// Interactive Component
// export const InteractiveStatusBar = () => {
//     const type = select('Type', ['info', 'success', 'warning', 'error'], 'info'); 
//     // Using select knob
//     const message = text('Message', 'This is a status message.'); 
//     // Using text knob
//     return <StatusBar type={type} message={message} />;
// };

// Control with args
export const InfoWithControls = (args) => (
    <StatusBar {...args} />
  );
  
  InfoWithControls.args = {
    type: "info",
    message: "This is an info status.",
  };

export const Info = () => <StatusBar type="info" message="This is an info status."  onClose={action('Closed!')} />;
// // A story is a single isolated state of a component; 3
// export const Info = () => <StatusBar type="info" message="This is an info status." />;
// export const Success = () => <StatusBar type="success" message="Action was successful." />;
// export const Warning = () => <StatusBar type="warning" message="This is a warning." />;
// export const Error = () => <StatusBar type="error" message="An error occurred." />;
