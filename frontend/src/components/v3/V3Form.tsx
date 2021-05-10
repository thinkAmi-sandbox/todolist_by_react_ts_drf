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
import axios, { AxiosResponse } from 'axios';

type Props = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

type ApiGetResponse = {
  id: number;
  content: string;
}[];

type ApiPostResponse = {
  id: number;
  content: string;
};

const API_URL = 'http://localhost:8000/api/v1/tasks/';

const V3Form: VFC<Props> = ({ tasks, setTasks }) => {
  const [content, setContent] = useState('');

  // ボタンクリック時にフォーカスをinputに移動するために、useRefとuseEffectを使う
  const taskRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    taskRef.current?.focus();
  });

  // Todoリストの初期値のロード
  useEffect(() => {
    console.log('called!');
    const fetchData = async () => {
      const response: AxiosResponse<ApiGetResponse> = await axios.get(API_URL);
      setTasks(response.data);
    };

    void fetchData();
  }, [setTasks]);

  const addTask = async (e: FormEvent) => {
    // HTMLのボタンのデフォルトの挙動(画面遷移)をキャンセル
    // https://ja.reactjs.org/docs/handling-events.html
    e.preventDefault();

    const requestData = { content };
    try {
      const response: AxiosResponse<ApiPostResponse> = await axios.post(
        API_URL,
        requestData,
      );

      // スプレッド構文を利用して、新しい配列を作り出し、末尾に今回のtaskを追加する
      // https://ja.reactjs.org/docs/hooks-reference.html#bailing-out-of-a-state-update
      setTasks([...tasks, { id: response.data.id, content }]);

      // 追加し終わったので、表示している部分をクリアする
      setContent('');
    } catch (error) {
      alert('エラーでした');
    }
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

export default V3Form;
