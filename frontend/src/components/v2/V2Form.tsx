import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
  VFC,
} from 'react';
import { Task } from 'components/Task';

type Props = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

const V2Form: VFC<Props> = ({ tasks, setTasks }) => {
  const [content, setContent] = useState('');

  // ボタンクリック時にフォーカスをinputに移動するために、useRefとuseEffectを使う
  const taskRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    taskRef.current?.focus();
  });

  const addTask = (e: FormEvent) => {
    // HTMLのボタンのデフォルトの挙動(画面遷移)をキャンセル
    // https://ja.reactjs.org/docs/handling-events.html
    e.preventDefault();

    // スプレッド構文を利用して、新しい配列を作り出し、末尾に今回のtaskを追加する
    // https://ja.reactjs.org/docs/hooks-reference.html#bailing-out-of-a-state-update
    setTasks([...tasks, { id: tasks.length, content }]);

    // 追加し終わったので、表示している部分をクリアする
    setContent('');
  };

  return (
    <>
      <form onSubmit={addTask}>
        <input
          type="text"
          name="task"
          ref={taskRef}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button type="submit">登録</button>
      </form>
    </>
  );
};

export default V2Form;
