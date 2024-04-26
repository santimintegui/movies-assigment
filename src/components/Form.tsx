import { FormEvent } from "react";

type FormProps = {
  succesSubmit: ({ search }: { search: string }) => Promise<void>;
};

function SearchForm({ succesSubmit }: FormProps) {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = Object.fromEntries(new window.FormData(event.currentTarget));
    const search = fields.search as string;

    if (search !== "") {
      succesSubmit({ search });
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex gap-4">
      <Input />
      <Button content="Search" type="submit" />
    </form>
  );
}

function Input() {
  return (
    <input
      type="text"
      name="search"
      placeholder="Search movie"
      className=" w-3/4 rounded-sm p-1 text-black outline-none"
    />
  );
}

function Button({
  content,
  type,
}: {
  content: React.ReactNode;
  type: "button" | "reset" | "submit";
}) {
  return (
    <button
      type={type}
      className=" bg-slate-700 p-1 rounded-md hover:bg-slate-600"
    >
      {content}
    </button>
  );
}

export { SearchForm, Input, Button };
