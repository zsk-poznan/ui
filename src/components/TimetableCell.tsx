import React from 'react';
import styled from 'styled-components';

import { Classroom } from './Classroom';

const CellWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.borderColor};
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
  font-family: ${(props) => props.theme.fontFamily};
`;

CellWrapper.defaultProps = {
  theme: {
    bgColor: '#2E3B4E',
    secondColor: '#4E5E76',
    fontColor: '#FFFFFF',
    fontFamily: 'Poppins',
  },
};

const LessonDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LessonName = styled.p`
  font-size: 1.1em;
`;

const TeacherName = styled.span`
  font-size: 0.9em;
`;

interface LessonData {
  lesson: string;
  teacher: string;
  classroom: string;
}

interface TimetableCellProps {
  lessonData: LessonData;
}

export const TimetableCell = ({
  lessonData: { lesson, teacher, classroom },
}: TimetableCellProps) => (
  <td>
    <CellWrapper>
      <LessonDetails>
        <LessonName>{lesson}</LessonName>
        <TeacherName>{teacher}</TeacherName>
      </LessonDetails>
      <div style={{ flex: 1, minWidth: '20px' }} />
      <Classroom id={classroom} />
    </CellWrapper>
  </td>
);
