import CategoriesContext from "./CategoriesContext";
import clientAxios from "../../config/axios";
import { sampleSize } from "lodash";
import { useContext } from "react";
import PublicationContext from "../publication/PublicationContext";

const categoryList = [
	{
  	id:'up for adoption',
    title: 'En adopción',
    urlFriendlyId: 'up-for-adoption'
  },
  {
  id: 'lost',
    title: 'Se perdió'
  },
  {
  id: 'found',
    title: 'Lo encontramos'
  },
  {
  id: 'highlighted',
  title: 'Destacados'
  }
];




const CategoriesProvider = ({children}) => {
	const getCategories = async () => {
		try {
      const response = await clientAxios.get(`http://localhost:4000/api/v1/publication`);
      const posts = response.data.publications;

      const initial = categoryList.reduce((memo, c) => {
        memo[c.id] = c;
        return memo;
      }, {})

      const categoriesWithPosts = Object.values( posts.reduce((memo, post) => {
        const c = memo[post.category];
        if (!c) throw new Error(`Incorrect category ${post.category} in post ${post.id}`)
        if (!c.posts) {
          c.posts = [];
        }
        c.posts.push(post);
        return memo;
      }, initial))

      categoriesWithPosts.find(x => x.id === 'highlighted').posts = sampleSize(posts, 3);
      return categoriesWithPosts;
		} catch (error) {
        throw error;
    }
};

  
  const getCategoryById = async (categoryId) => {
    const categories = await getCategories()
    console.log(categories)
    return categories.find(x => x.id === categoryId)
  };

  return (

        <CategoriesContext.Provider value={
         { getCategories,
        getCategoryById
      }
          
        }>
            {children}
        </CategoriesContext.Provider>
      
  )
}

export default CategoriesProvider