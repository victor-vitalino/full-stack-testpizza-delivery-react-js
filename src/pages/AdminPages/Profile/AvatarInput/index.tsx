import React, { useState, useRef, useEffect } from "react";
import { useField } from "@unform/core";
import { useSelector, useDispatch } from "react-redux";

import { StateType } from "typesafe-actions";
import firebase from "../../../../config/FirebaseConfig";

import { Container } from "./styles";
import { updateProfileRequest } from "../../../../store/modules/auth/actions";

interface IAvatarInput {
  name: string;
}

const AvatarInput: React.FC<IAvatarInput> = ({ name }) => {
  const dispatch = useDispatch();
  const uid = useSelector((state: StateType<any>) => state.auth.user.uid);
  const avatar = useSelector(
    (state: StateType<any>) => state.auth.admin.avatar
  );

  const { defaultValue, registerField } = useField("avatar");

  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const [preview, setPreview] = useState(avatar);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: "avatar_id",
        ref: ref.current,
        path: "dataset.file",
      });
    }
  }, [ref, registerField]);

  async function handleChange(e: any) {
    // criando o objeto de arquivo que o multer recebe

    const file = e.target.files[0];

    const uploadTask = firebase.storage().ref(`profile/${uid}`).put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      function (err) {
       // console.tron.error(err);
      },
      () => {
        firebase
          .storage()
          .ref("profile")
          .child(uid)
          .getDownloadURL()
          .then((url) => {
            setPreview(url);
            dispatch(updateProfileRequest({ url, uid }));
          });
      }
    );

    // const response = { data: null }; //await api.post("files", data);
    /*
    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
    */
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview
              ? preview
              : "https://api.adorable.io/avatars/50/abott@adorable.png"
          }
          alt=""
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
          data-file={file}
          ref={ref}
        />
      </label>
    </Container>
  );
};

export default AvatarInput;
//
//
//
