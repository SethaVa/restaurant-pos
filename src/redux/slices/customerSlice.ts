import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export interface CustomerState {
  orderId: string,
  customerName: string,
  customerPhone: string,
  guests: number,
  tableNo: string,
  orderDate: Date
}

interface SetCustomerPayload {
  customerName: string,
  customerPhone: string,
  guests: number,

}

interface SetCustomerTablePayload{
  tableNo: string
}

const initialState: CustomerState = {
  orderId: "",
  customerName: "",
  customerPhone: "",
  guests: 0,
  tableNo: "",
  orderDate: new Date()
}

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer: (
      state, 
      action: PayloadAction<SetCustomerPayload>
    ) => {
        const {customerName, customerPhone, guests } = action.payload;
        const orderId = `${Date.now()}-${Math.random().toString(36).substr(2,5)}`;
        const orderDate = new Date();
        Object.assign(state, {
          customerName,
          customerPhone,
          orderId,
          guests,
          orderDate
        })
    },
    removeCustomer: () => initialState,
    setCustomerTable: (
      state, 
      action: PayloadAction<SetCustomerTablePayload>
    ) => {
      Object.assign(state, action.payload);
    }
  },
});

export const { setCustomer, setCustomerTable, removeCustomer } =
  customerSlice.actions;

export default customerSlice.reducer;
