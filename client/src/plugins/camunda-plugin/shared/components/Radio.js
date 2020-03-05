/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

import React from 'react';

import classNames from 'classnames';

export default function Radio(props) {

  const {
    hint,
    label,
    field,
    form,
    children,
    values,
    ...restProps
  } = props;

  const {
    name: fieldName
  } = field;

  const meta = form.getFieldMeta(fieldName);

  const isChecked = (childValue) => meta.value === childValue;

  return (
    <React.Fragment>
      <div className={
        classNames('form-group', 'form-inline')
      }>
        <label htmlFor={ fieldName }>{ label }</label>
        <div className="form-check-inline">
          {
            values.map((child) => {
              return (
                <React.Fragment key={ child.label }>
                  <div className={
                    classNames('custom-control', 'custom-radio')
                  }>
                    <input
                      type="radio"
                      name={ fieldName }
                      value={ child.value }
                      checked={ isChecked(child.value) }
                      className="custom-control-input"
                      id={ child.label }
                      tabIndex={ 0 }
                      { ...restProps } />
                    <label
                      htmlFor={ child.label }
                      className="custom-control-label">
                      { child.label }
                    </label>
                  </div>
                </React.Fragment>
              );
            })
          }
        </div>
      </div>
    </React.Fragment>
  );
}
