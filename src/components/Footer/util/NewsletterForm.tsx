import React from 'react';
import { IconButton, Input, Stack, useColorModeValue } from '@chakra-ui/react';

import { BiMailSend } from 'react-icons/bi';

function NewsletterForm() {
  return (
    <form
      action='https://gzonecreative.us10.list-manage.com/subscribe/post?u=4321fd28a78d9d82cea2b257a&amp;id=8cc596f198'
      method='post'
      id='mc-embedded-subscribe-form'
      name='mc-embedded-subscribe-form'
    >
      <Stack direction={'row'}>
        <Input
          isRequired
          type='email'
          placeholder={'Your email address'}
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
          border={0}
          _focus={{
            bg: 'whiteAlpha.300',
          }}
        />
        <IconButton
          type='submit'
          bg={useColorModeValue('#ff5118', '#b5eb46')}
          color={useColorModeValue('white', 'gray.800')}
          _hover={{
            bg: '#01e6bf',
          }}
          aria-label='Subscribe'
          icon={<BiMailSend />}
        />
      </Stack>
    </form>
  );
}

export default NewsletterForm;
