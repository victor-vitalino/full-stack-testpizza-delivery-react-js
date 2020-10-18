import React, { useState, useRef, useEffect } from "react";

import { Container } from "./styles";

interface IAvatarInput {
  name?: string;
}

const AvatarInput: React.FC<IAvatarInput> = ({ name }) => {
  /*
    const { defaultValue, registerField } = useField('avatar');
    
    const [file, setFile] = useState(defaultValue && defaultValue.id);
    
    const [preview, setPreview] = useState(defaultValue && defaultValue.url);
    
    const ref = useRef(null);
    
    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'avatar_id',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref, registerField]);
    
    async function handleChange(e) {
        // criando o objeto de arquivo que o multer recebe
        const data = new FormData();
        // adicionando o file no objeto
        data.append('file', e.target.files[0]);
        const response = await api.post('files', data);
        
        const { id, url } = response.data;
        setFile(id);
        setPreview(url);
    }
    */
  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={"https://api.adorable.io/avatars/50/abott@adorable.png"}
          alt=""
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          />
      </label>
    </Container>
  );
};

export default AvatarInput;

// data-file={file}
// onChange={handleChange}
// ref={ref}