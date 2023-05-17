export default function Contact() {
  return (
    <div className="  w-full flex  p-20">
      <div className=" w-full flex flex-col space-y-12">
        <h1 className="text-6xl">
          Lets build <br />
          something
          <br /> great Together
        </h1>
        <div className="flex flex-col space-y-2">
          {[1, 2, 3, 4].map((i) => {
            return (
              <input
                key={i}
                type="text"
                className="input h-[100px] w-full rounded-none border-b-2 border-blue-700 bg-gray-600 text-white"
                placeholder="Name"
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col p-12 space-y-10 text-4xl">
        {[
          {
            title: "email",
            value: "ricots113@gmail.com",
          },
          {
            title: "phone",
            value: "123-456-7890",
          },
          {
            title: "location",
            value: "New York, USA",
          },
          {
            title: "website",
            value: "www.example.com",
          },
        ].map(({ title, value }) => (
          <div className="flex flex-col space-y-2 border-b-2 border-gray-500 p-5">
            <i>{title}</i>
            <div>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
