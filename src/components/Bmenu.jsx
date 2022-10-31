import { Button, Drawer, Radio, Space } from 'antd';
import React, { useState } from 'react';

const Bmenu = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space className='menu-burger'>
        <Button type="primary" onClick={showDrawer}>
          icon
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={'right'}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default Bmenu;