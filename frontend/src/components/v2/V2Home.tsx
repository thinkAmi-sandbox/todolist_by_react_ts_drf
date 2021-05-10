import { useState, VFC } from 'react';
import { Task } from 'components/Task';
import V2Form from 'components/v2/V2Form';
import V2List from 'components/v2/V2List';

const V2Home: VFC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <h1>タスクリスト (v2)</h1>
      <V2Form tasks={tasks} setTasks={setTasks} />
      <V2List tasks={tasks} />
    </>
  );
};

export default V2Home;
