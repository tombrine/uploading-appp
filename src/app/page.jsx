"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [json, setJson] = useState(null);

  const fetchData = async () => {
    const webJSON = await fetch(
      `https://api.cloudinary.com/v1_1/dx3dkoorq/image/upload`,
      { method: "POST", body: formData }
    );
    const data = await webJSON.json();
    setJson(data.secure_url);
    console.log(json);
  };

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "test_0913");
  formData.append("cloud_name", "dx3dkoorq");

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={() => fetchData()}>upload image</button>
      {json ? (
        <div>
          <img src={json} alt="" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
