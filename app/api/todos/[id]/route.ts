import { NextResponse } from "next/server";

const DATA_SOURCE = "https://jsonplaceholder.typicode.com/todos";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params: { id } }: Params) {
  const res = await fetch(`${DATA_SOURCE}/${id}`);

  if (!res.ok) {
    return NextResponse.json("data not found");
  }

  const todo: Todo = await res.json();

  return NextResponse.json(todo);
  
}
