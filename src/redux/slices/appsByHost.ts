import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import responseMock from "../mock/hosts.json";
import { AppsByHostState } from "../../domain/type";
import { mapFromAppsToHosts } from "../../utils/functions";
import axios from "axios";

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHosts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = mapFromAppsToHosts(responseMock);
      state.error = "";
    });
    builder.addCase(fetchHosts.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default appsByHostSlice.reducer;
