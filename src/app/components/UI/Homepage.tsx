import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../utils/types";
import LatestNews from "../UI/LatestNews";
import Header from "./Header";
import ArticlesList from "./ArticlesList";
import "./Homepage.scss";
import { Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
interface HomepageProps {
  favorites: Article[];
  articlesByCategory: { [key: string]: Article[] };
  displayedArticles: Article[];
  handleSearch: (query: string) => void;
}

const Homepage: React.FC<HomepageProps> = ({
  favorites,
  articlesByCategory,
  displayedArticles,
  handleSearch,
}) => {
  return (
    <div className="parent">
      {Object.entries(articlesByCategory).map(([category, articles], index) => (
        <Grid item key={index} xs={4}>
          <ArticlesList articles={articles} />
        </Grid>
      ))}
      <Grid item xs={4}>
        <LatestNews allArticles={displayedArticles} />
      </Grid>
    </div>
  );
};

export default Homepage;