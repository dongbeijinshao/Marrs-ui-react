import { Button, Divider, Text } from '@wemo-ui/marrs';
import { Link } from 'react-router-dom';
import components from './components';

export default function ShowAll() {
  return (
    <header>
      {components.map((item) => (
        <span key={item.name}>
          <Button face="text" disabled={item.alpha}>
            <Link to={`/${item.name}`}>
              <Text color={item.alpha ? 'blue' : 'primary'}>{item.name}</Text>
            </Link>
          </Button>
          <Divider vertical />
        </span>
      ))}
      <Divider tipStart="10%" thickness={2}>
        <Text tl="t18">devider</Text>
      </Divider>
    </header>
  );
}
