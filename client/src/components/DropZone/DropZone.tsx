import { CSSProperties, useContext, useEffect, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import FileContext from '../../context/FileContext';

const baseStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '2rem',
  width: 'calc(10vw + 36vh)',
  height: '36vh',
  cursor: 'pointer',
  backgroundColor: 'var(--title-color)',
  color: 'var(--gray-light-color)',
  outline: 'none',
  borderRadius: '4px',
  border: 'dashed 4px var(--second-color)',
  margin: '0 auto'
};

const activeStyle: CSSProperties = {
  border: 'dashed 4px var(--first-color)'
};

const acceptStyle: CSSProperties = {
  border: 'dashed 4px var(--link-color)'
};

const rejectStyle: CSSProperties = {
  border: 'dashed 4px var(--bs-warning)'
};

const DropZone = () => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles
  } = useDropzone({ accept: 'image/*' });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const { handleImageDropZone } = useContext(FileContext);

  useEffect(() => {
    if (handleImageDropZone)
      handleImageDropZone(acceptedFiles);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acceptedFiles]);

  return (
    <div className='p-2'>
      <article className='drop__zone' {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p className='d-flex justify-content-center align-items-center m-0'>
          Agarre y suelte sus imágenes aquí
        </p>
        <p className='mt-2 text-base fs-6'>
          Solo damos soporte a archivos jpg y jpeg
        </p>
      </article>
    </div>
  );
};

export default DropZone;
