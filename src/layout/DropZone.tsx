/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdCloudUpload } from 'react-icons/md';

export default function DropZone(props: {
  color?: string;
  children?: JSX.Element;
}) {
  const {
    color = 'black',
    children = (
      <div
        style={{
          backgroundColor: 'blue',
          height: '150px',
        }}
      >
        hello world
      </div>
    ),
  } = props;

  const [alert, setAlert] = useState('');
  const [active, setActive] = useState(children ? true : false);
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    acceptedFiles.forEach((file: Blob) => {
      const reader = new FileReader();

      reader.onabort = () => setAlert('file reading was aborted');
      reader.onerror = () => setAlert('file reading has failed');
      reader.onload = () => {
        setActive(true);
        // Do whatever you want with the file contents
        //const binaryStr = reader.result;
        setAlert('file uploaded');
        //console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div
        {...getRootProps({ onClick: (event) => event.stopPropagation() })}
        css={css`
          overflow: hidden;
          position: relative;
          height: 100%;
          width: 100%;
          ${!active || isDragActive ? `border: 2px dashed ${color};` : null}
          color: ${color};
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <div
          css={css`
            text-align: center;
            font-weight: 600;
            width: 100%;
          `}
        >
          {active ? (
            <div
              css={css`
                width: 100%;
                opacity: ${isDragActive ? 0.3 : 1};
              `}
            >
              {/*PlaceHolder*/}
              {children}
              {/**we can delete alert visualisation */}
              <div>{alert}</div>
            </div>
          ) : null}

          {isDragActive ? (
            <>
              <div
                css={css`
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                `}
              >
                <MdCloudUpload
                  size={70}
                  css={css`
                    margin: auto;
                  `}
                />

                <p>Drop the files here</p>
              </div>
              {active ? (
                <>
                  {/*grey blur*/}
                  <div
                    css={css`
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      background-color: rgba(0, 0, 0, 0.3);
                    `}
                  />
                </>
              ) : null}
            </>
          ) : active ? null : (
            <p>Drag & Drop your files here</p>
          )}
        </div>
        <input
          css={css`
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          `}
          {...getInputProps()}
        />
      </div>
    </>
  );
}
