import { NonIdealState, Button } from '@blueprintjs/core';
import type { IconName } from '@blueprintjs/icons';
import styled from '@emotion/styled';
import { CSSProperties, MouseEventHandler, useCallback, useMemo } from 'react';
import { FileError, FileRejection, useDropzone } from 'react-dropzone';
import { FaCloudUploadAlt } from 'react-icons/fa';

export interface DropZoneProps {
  borderColor?: string;
  onDrop?: <T extends File>(
    acceptedFiles: T[],
    rejectedFiles?: FileRejection[],
  ) => void;
  fileValidator?: <T extends File>(file: T) => FileError | FileError[] | null;
  emptyIcon?: IconName;
  emptyTitle?: string;
  emptyDescription?: string;
  emptyButtonText?: string;
  emptyButtonIcon?: IconName;
}

const DropzoneRoot = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

interface DropzoneColorProps {
  borderColor: CSSProperties['borderColor'];
}

const DropzoneDragActive = styled.div<DropzoneColorProps>`
  font-size: 1.5em;
  font-weight: 600;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  background-color: white;
  border: 5px dashed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;

  border-color: ${({ borderColor }) => borderColor};
`;

const DropzoneEmpty = styled.div<DropzoneColorProps>`
  width: 100%;
  height: 100%;
  padding: 1em;
  border: 5px dashed;
  cursor: pointer;
  color: black;

  border-color: ${({ borderColor }) => borderColor};
`;

export function DropZone(props: DropZoneProps) {
  return <DropZoneContent {...props} />;
}

export interface DropZoneContainerProps extends DropZoneProps {
  children: JSX.Element | null;
}

export function DropZoneContainer(props: DropZoneContainerProps) {
  return <DropZoneContent {...props} />;
}

function DropZoneContent(
  props: DropZoneProps & {
    children?: JSX.Element | null;
    onClick?: MouseEventHandler<HTMLDivElement>;
    emptyIcon?: IconName;
    emptyTitle?: string;
    emptyDescription?: string;
    emptyButtonText?: string;
    emptyButtonIcon?: IconName;
  },
) {
  const {
    borderColor = 'gray',
    children = null,
    onDrop,
    onClick,
    fileValidator,
    emptyIcon = 'import',
    emptyTitle = 'No data loaded',
    emptyDescription = 'You can load data by drag-and-dropping files here',
    emptyButtonText = 'Select files',
    emptyButtonIcon = 'plus',
  } = props;

  const hasChildren = children !== null;

  const handleOnDrop = useCallback(
    <T extends File>(acceptedFiles: T[], rejectedFiles: FileRejection[]) => {
      onDrop?.(acceptedFiles, rejectedFiles);
    },
    [onDrop],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    noClick: hasChildren,
    validator: fileValidator,
    onDrop: handleOnDrop,
  });

  const getPropsOptions = useMemo(() => {
    if (onClick) {
      return { onClick };
    }
  }, [onClick]);

  return (
    <DropzoneRoot {...getRootProps(getPropsOptions)}>
      {children}
      {isDragActive ? (
        <DropzoneDragActive borderColor={borderColor}>
          <FaCloudUploadAlt size={70} />
          <p>Drop the files here</p>
        </DropzoneDragActive>
      ) : !hasChildren ? (
        <DropzoneEmpty borderColor={borderColor}>
          <NonIdealState
            icon={emptyIcon}
            title={emptyTitle}
            description={emptyDescription}
            action={
              <Button
                outlined
                text={emptyButtonText}
                icon={emptyButtonIcon}
                intent="primary"
              />
            }
          />
        </DropzoneEmpty>
      ) : null}
      <input {...getInputProps()} />
    </DropzoneRoot>
  );
}
