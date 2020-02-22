import React from 'react';
import styled from 'styled-components';

const ClassroomWrapper = styled.div<{ type: string }>`
  box-sizing: border-box;
  min-width: 32px;
  height: 32px;
  border-radius: 16px;
  padding: 0 8px;

  background: ${(props) => props.theme.classroomBgColor[props.type]};
  color: ${(props) => props.theme.classroomFontColor};
`;

const ClassroomId = styled.p`
  margin: auto;
  font-size: 0.8em;
  font-weight: 600;
  line-height: 32px;
`;

ClassroomWrapper.defaultProps = {
  theme: {
    classroomBgColor: {
      fredry: '#C2D2EB',
      bukowska: '#E07474',
      wf: '#7CE074',
    },
    classroomFontColor: '#2E3B4E',
  },
};

function typeOfClassroom(id: string): string {
  const fredry = /^\d*$/;
  const wf = /^SG\d*$/;
  if (id.match(wf)) return 'wf';
  if (id.match(fredry)) return 'fredry';
  return 'bukowska';
}

interface ClassroomProps {
  id: string;
}

export const Classroom = ({ id }: ClassroomProps) => (
  <ClassroomWrapper type={typeOfClassroom(id)}>
    <ClassroomId>{id}</ClassroomId>
  </ClassroomWrapper>
);
