import String from './string';
import Range from './range';

const mapping = {
    string: String,
    range: Range
}

export default function Filter ({config, ...others}) {
    const Cmp = mapping[config?.type];
    return !Cmp ? null : (
        <div>
            <div>{config.label || config.field}</div>
            <Cmp config={config} {...others} />
        </div>
    )
}
