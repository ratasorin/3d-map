import { FC, useCallback } from 'react';
import { openModal } from 'store/widgets/actions/modals-actions';
import { Blog } from '../../../Blog/blog-slice';
import title__style from './title.module.css';
import { BsArrowRight } from 'react-icons/bs';

const Title: FC<{
  title: string;
  author: string;
  content: string;
  likes: number;
  blogID: string;
  authorID: string;
  monument: string;
}> = ({ title, author, content, likes, blogID, authorID, monument }) => {
  const openBlog = useCallback(() => {
    openModal('blog-modal', {
      author,
      content,
      likes,
      title,
      blogID,
      authorID,
      monument,
    } as Blog);
  }, [content, title, author, likes, blogID]);

  return (
    <button onClick={openBlog} className={title__style.title}>
      <div className={title__style.text}>{title.toLocaleUpperCase()}</div>
      <BsArrowRight className={title__style.icon} />
    </button>
  );
};

export default Title;
