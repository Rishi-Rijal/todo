import {NewCard, TodoCard} from "./index"

export default function Home(){
    return(
        <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <NewCard />
            <TodoCard />
      </div>
    )
}