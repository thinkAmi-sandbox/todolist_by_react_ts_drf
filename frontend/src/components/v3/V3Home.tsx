import { useState, VFC } from 'react';
import { Task } from 'components/Task';
import V3Form from 'components/v3/V3Form';
import V3List from 'components/v3/V3List';

const V3Home: VFC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <h1>タスクリスト (v3)</h1>
      <V3Form tasks={tasks} setTasks={setTasks} />
      <V3List tasks={tasks} />
    </>
  );
};

export default V3Home;
