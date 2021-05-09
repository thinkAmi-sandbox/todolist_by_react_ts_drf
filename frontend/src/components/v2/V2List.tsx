import { VFC } from 'react';
import { Task } from 'components/Task';

type Props = {
  tasks: Task[];
};

const V2List: VFC<Props> = ({ tasks }) => (
  <>
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.content}</li>
      ))}
    </ul>
  </>
);

export default V2List;
