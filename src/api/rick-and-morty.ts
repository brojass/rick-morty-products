import axios from "axios";

export class RickAndMortyAPI {
  constructor() { }

  async getItems() {
    try {
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get("https://rickandmortyapi.com/api/character", {
        headers: {
          Accept: "application/json",
        },
      });

      // console.log(JSON.stringify(data, null, 4));

      // 👇️ "response status is: 200"
      //console.log("response status is: ", status);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        //console.log("error message: ", error.message);
        return error.message;
      } else {
        //console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }
}
