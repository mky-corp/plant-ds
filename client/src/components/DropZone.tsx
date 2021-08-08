import { CSSProperties, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle: CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '2rem',
  cursor: 'pointer',
  backgroundColor: 'var(--title-color)',
  color: 'var(--gray-light-color)',
  outline: 'none',
  transition: 'pulse 1.2s ease-in-out',
  borderRadius: '4px',
  border: 'dashed 4px var(--second-color)',
  margin: '0 auto',
  width: '72%'
};

const activeStyle: CSSProperties = {
  borderColor: 'var(--second-color)'
};

const acceptStyle: CSSProperties = {
  borderColor: 'var(--first-color)'
};

const rejectStyle: CSSProperties = {
  borderColor: 'var(--bs-warning)'
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

  const files = acceptedFiles.map((file: File) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <div className='p-2'>
      <article
        className='cursor-pointer focus:outline-none'
        {...getRootProps({ style })}
      >
        <input {...getInputProps()} />
        <p className='d-flex justify-content-center align-items-center m-0'>
          Drag 'n' drop some files here, or click to select files
        </p>
        <p className='mt-2 text-base fs-6'>
          Only jpg, jpeg and png files supported
        </p>
      </article>
      <aside>
        {/* <h4>Images</h4> */}
        <ul>{files}</ul>
      </aside>
    </div>
  );
};

export default DropZone;
