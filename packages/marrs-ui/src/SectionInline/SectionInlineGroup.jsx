import { styled } from '@wemo-ui/marrs/styles';
import { getComponentName } from '@wemo-ui/marrs/styles/topSet';
import SectionInline from './SectionInline';

const ComponentName = getComponentName('SectionInlineGroup');

const SectionInlineGroupRoot = styled('div', {
  name: ComponentName,
  slot: 'root'
})({
  position: 'relative'
});

export default function SectionInlineGroup({ children }) {
  return (
    <SectionInlineGroupRoot>
      {Array.isArray(children)
        ? children.map((el, i, arr) => (
            <SectionInline
              {...el.props}
              showLine={i !== arr.length - 1}
              key={`SectionInline_${i}`}
            />
          ))
        : children}
    </SectionInlineGroupRoot>
  );
}
