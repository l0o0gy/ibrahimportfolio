import React from 'react';
import { useLocation } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Work() {
  const location = useLocation();
  const project = location.state?.data || {}; // استرجاع البيانات المرسلة

  return (
    <div>
      <h1>{project.title || "Project Work"}</h1> {/* عرض عنوان المشروع أو افتراضي */}
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        <ImageListItem key={project.id}>
          <img
            src={project.image} // استخدم مصدر الصورة للمشروع
            alt={project.title}
            loading="lazy"
            style={{ width: '100%', height: 'auto' }} // تأكد من أنها متجاوبة
          />
          <div>{project.title}</div> {/* عرض عنوان المشروع */}
        </ImageListItem>
      </ImageList>
    </div>
  );
}

export default Work;
