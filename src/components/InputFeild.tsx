import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit={handleAdd}>
      <div className="input__group">
        <input
          ref={inputRef}
          type="input"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
            // inputRef.current?.blur();
          }}
          placeholder="Enter your task"
          className="input__box"
        />
        <button className="input__submit" type="submit">
          <span>Go</span>
        </button>
      </div>
    </form>
  );
};

export default InputFeild;
