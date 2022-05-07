import { Animation, IconButton } from '@wemo-ui/marrs';
import { IconAdd } from '@wemo-ui/marrs-icons';
import { useEffect, useState } from 'react';

function AnimationView() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log(fade);
      setFade(!fade);
    }, 2000);
  }, [fade]);
  return (
    <div style={{ padding: 20 }}>
      <Animation animate="fade" fade={fade}>
        <IconButton icon={<IconAdd />} />
      </Animation>
    </div>
  );
}

export default AnimationView;
