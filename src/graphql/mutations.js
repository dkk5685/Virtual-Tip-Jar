/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteTipjar = /* GraphQL */ `
  mutation DeleteTipjar($id: Int!) {
    deleteTipjar(id: $id) {
      id
      name
      position
      company
      city
      state
      email
      payment
      venmo
      paypal
      code
    }
  }
`;
export const createTipjar = /* GraphQL */ `
  mutation CreateTipjar($createTipjarInput: CreateTipjarInput!) {
    createTipjar(createTipjarInput: $createTipjarInput) {
      id
      name
      position
      company
      city
      state
      email
      payment
      venmo
      paypal
      code
    }
  }
`;
export const updateTipjar = /* GraphQL */ `
  mutation UpdateTipjar($updateTipjarInput: UpdateTipjarInput!) {
    updateTipjar(updateTipjarInput: $updateTipjarInput) {
      id
      name
      position
      company
      city
      state
      email
      payment
      venmo
      paypal
      code
    }
  }
`;
