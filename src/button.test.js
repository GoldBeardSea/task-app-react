import React from 'react';
import renderer from 'react-test-renderer';
import AddTask from "./button";
import { render, queryByAttribute } from '@testing-library/react';

const getById = queryByAttribute.bind(null, 'id');

test('Renders Add Task', () => {
  
  const dom = render(<AddTask />);
  let id = getById(dom.container, 'TaskButton');
  expect(id).toBeInTheDocument();

});