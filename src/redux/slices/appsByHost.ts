import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import responseMock from "../mock/hosts.json";
import { Host } from "../../domain/type";
import axios from "axios";

interface AppsByHostState {
  data: any;
  loading: boolean;
  error: string | unknown;
}

const initialState: AppsByHostState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchHosts = createAsyncThunk("appsByHost/fetchHosts", () => {
  return process.env.NEXT_PUBLIC_API_ENABLE === "ON"
    ? axios
        .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => res.data)
    : responseMock;
});

const appsByHostSlice = createSlice({
  name: "appsByHost",
  initialState: initialState,
  reducers: {
    setAppsByHost(state, param) {
      const { payload } = param;
      state.data = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHosts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchHosts.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export const { setAppsByHost } = appsByHostSlice.actions;

export default appsByHostSlice.reducer;
