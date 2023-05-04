import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ReposContext = createContext([]);

const ReposProvider = ({ children }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await axios.get(
        "https://api.github.com/user/repos?sort=created&direction=desc",
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_ROCHA_GITHUB_ACCESS_TOKEN}`,
          },
        }
      );
      setRepos(response.data);
    };

    fetchRepos();
  }, []);

  return (
    <ReposContext.Provider value={repos}>{children}</ReposContext.Provider>
  );
};

export { ReposContext, ReposProvider };
