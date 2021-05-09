import { FormEvent, useEffect, useRef, useState, VFC } from 'react';

type Task = {
  id: number;
  content: string;
};

const V1FormList: VFC = () => {
  const [content, setContent] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  // ボタンクリック時にフォーカスをinputに移動するために、useRefとuseEffectを使う
  // ちなみに、nullを抜くと、input要素のrefのところで以下のエラーとなる
  // TS2322: Type 'MutableRefObject<HTMLInputElement | undefined>' is not assignable to type 'LegacyRef<HTMLInputElement>| undefined'.
  // Type 'MutableRefObject<HTMLInputElement | undefined>' is not assignable to type 'RefObject<HTMLInputElement>'.
  // Types of property 'current' are incompatible.
  // Type 'HTMLInputElement | undefined' is not assignable to type 'HTMLInputElement | null'.
  // Type 'undefined' is not assignable to type 'HTMLInputElement | null'.
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

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.content}</li>
        ))}
      </ul>
    </>
  );
};

export default V1FormList;
