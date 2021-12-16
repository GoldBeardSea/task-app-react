import React from 'react';
import Task from "./tasklist";
import { render, queryByAttribute } from '@testing-library/react';

const getById = queryByAttribute.bind(null, 'id');


test('Renders task list if local host is running', () => {

  const dom = render(<Task />);
  let id = getById(dom.container, 'ContainerDiv');
  expect(id).toBeInTheDocument();

  });