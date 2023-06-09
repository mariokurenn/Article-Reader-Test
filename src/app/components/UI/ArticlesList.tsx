import React from "react";
import { Article } from "../utils/types";
import ArticleActions from "../store/reducers/ArticleActions";
import { Card,CardContent, CardMedia, Typography, colors } from '@mui/material';
import "./Articles.scss";

interface ArticlesListProps {
  articles: Article[];
}


const ArticlesList: React.FC<ArticlesListProps> = ({ articles }) => {
  return (
    <Card sx={{ maxWidth: 320, borderRadius: '10px', padding: 0 }}>
      <CardContent>
        {articles.map((article: Article, index: number) => (
          <div key={index} style={{ position: 'relative', paddingBottom: '30px' }}>
            <CardMedia
              component="img"
              height="211"
              image="https://cdn.shopify.com/s/files/1/1094/4892/products/zidne-slike-moderne_9aaacbd7-4af6-44b8-975c-20c75c3d2a88_1500x900.jpg?v=1623408204"
              alt="Article Image"
            />
            <ArticleActions article={article} />
            <CardContent
              sx={{
                padding: '15px',
                position: 'absolute',
                top: 'auto',
                bottom: '0%',
                left: '0%',
                right: '0%',
                backgroundColor: 'white',
              }}
            >
              <Typography variant="body2" color="text.secondary" sx={{ color: '#1E71BB', fontSize: '10px', lineHeight: 3, textTransform: 'upperCase' }}>
                {article.category}
              </Typography>
              <Typography gutterBottom variant="h5" component="div" fontSize={'16px'}>
                {article.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div" fontSize={'16px'}>
                {article.author}
              </Typography>
            </CardContent>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
export default ArticlesList;