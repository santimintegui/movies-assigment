type ErrorAlertProps = {
  error?: string;
};

function ErrorAlert({ error }: ErrorAlertProps) {
  return (
    <>
      {error && (
        <div className=" w-64 h-fit bg-red-600 mt-5 p-3 border rounded-xl border-red-900 text-black text-center">
          Error: {error}
        </div>
      )}
    </>
  );
}

export default ErrorAlert;
