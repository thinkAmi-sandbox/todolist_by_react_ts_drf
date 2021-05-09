import { VFC } from 'react';
import { Task } from 'components/Task';

type Props = {
  tasks: Task[];
};

const V3List: VFC<Props> = ({ tasks }) => (
  <>
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.content}</li>
      ))}
    </ul>
  </>
);

export default V3List;
