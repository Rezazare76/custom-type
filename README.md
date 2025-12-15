# Custom Types for TypeScript

A collection of custom TypeScript types for use across projects, especially for React applications. This package contains common types for props, event handlers, and other utility types that can help streamline your TypeScript development.

## Installation

To install the `custom-types` package, run the following command:

```bash
npm install custom-type --save-dev
```

## Usage

After installing the package, you can import and use the custom types in your TypeScript files. The types provided in this package are useful for creating type-safe React components.

### Example 1: Using `ChildrenProps`

```typescript
import { ChildrenProps } from "custom-type";

const MyComponent: React.FC<ChildrenProps> = ({ children }) => {
  return <div>{children}</div>;
};
```

### Example 2: Using `TagNameProps`

```typescript
import { TagNameProps } from "custom-type";

const MyComponent: React.FC<TagNameProps> = ({ tagName }) => {
  const Tag = tagName;
  return <Tag>Some Content</Tag>;
};

// Usage
<MyComponent tagName="h1" />;
```

### Example 3: Using `CommonProps`

```typescript
import { CommonProps } from "custom-type";

interface ButtonProps extends CommonProps<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, className, ...props }) => {
  return (
    <button className={className} {...props}>
      {label}
    </button>
  );
};

// Usage
<Button label="Click me" id="submit-button" className="btn-primary" />;
```

### Example 4: Using `EventHandlerProps`

```typescript
import { EventHandlerProps } from "custom-type";

const MyComponent: React.FC<EventHandlerProps> = ({
  onClick,
  onMouseEnter,
}) => {
  return (
    <div onClick={onClick} onMouseEnter={onMouseEnter}>
      Hover and click me
    </div>
  );
};

// Usage
<MyComponent
  onClick={() => alert("Clicked!")}
  onMouseEnter={() => console.log("Mouse entered")}
/>;
```

## Types Provided

- **`ChildrenProps`**: Used to define a `children` prop of type `React.ReactNode`.
- **`TagNameProps`**: Used to specify an HTML tag name (e.g., `div`, `h1`, etc.).
- **`CommonProps<T>`**: A generic interface that defines common props for any HTML element, such as `id`, `className`, `style`, `ref`, and custom `data-` attributes.
- **`LabelCommonProps`**: Interface for props used in labels, specifically for the `htmlFor` attribute.
- **`EventHandlerProps<T>`**: A comprehensive set of event handlers for different types of DOM events, including mouse, keyboard, touch, form, and more.

## License

- [MIT License](https://opensource.org/licenses/MIT)
- [GitHub Repository](https://github.com/Rezazare76/custom-types)
