import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export default function SearchBar({onSubmit}) {
    const [value,setValue] = useState("");

    function submit(e){

        if (e.key === "Enter" && e.target.value.trim() !== ""){
            onSubmit(value);
            setValue("")
        }

    }
    
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={"Search a tv show you may like"}
      />
    </>
  );
}