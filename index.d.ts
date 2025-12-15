import React, { JSX } from "react";

export type ChildrenProps  = {
  children?: React.ReactNode;
};
export type TagNameProps  = {
  tagName: keyof JSX.IntrinsicElements;
};

export interface CommonProps<T> {
  /** Unique identifier for the element */
  id?: string;
  /** Name attribute for the element, often used in forms */
  name?: string;
  /** CSS class names for styling */
  className?: string;
  /** React ref for accessing the DOM element */
  ref?: React.Ref<T>;
  /** Text direction for the element */
  dir?: "rtl" | "ltr";
  /** Tab order of the element */
  tabIndex?: number;
  /** Inline styles for the element */
  style?: React.CSSProperties;
  /** Data attributes for custom purposes */
  [dataAttr: `data-${string}`]: string | undefined;
}
export interface LabelCommonProps {
  htmlFor: string;
}
export interface EventHandlerProps<T extends Element = HTMLElement> {
  /** Form events */
  onChange?: React.ChangeEventHandler<T>;
  onInput?: React.FormEventHandler<T>;
  onSubmit?: React.FormEventHandler<T>;
  onReset?: React.FormEventHandler<T>;

  /** Focus events */
  onFocus?: React.FocusEventHandler<T>;
  onBlur?: React.FocusEventHandler<T>;

  /** Keyboard events */
  onKeyDown?: React.KeyboardEventHandler<T>;
  onKeyPress?: React.KeyboardEventHandler<T>;
  onKeyUp?: React.KeyboardEventHandler<T>;

  /** Mouse events */
  onClick?: React.MouseEventHandler<T>;
  onDoubleClick?: React.MouseEventHandler<T>;
  onContextMenu?: React.MouseEventHandler<T>;
  onMouseDown?: React.MouseEventHandler<T>;
  onMouseUp?: React.MouseEventHandler<T>;
  onMouseEnter?: React.MouseEventHandler<T>;
  onMouseLeave?: React.MouseEventHandler<T>;
  onMouseMove?: React.MouseEventHandler<T>;
  onMouseOver?: React.MouseEventHandler<T>;
  onMouseOut?: React.MouseEventHandler<T>;

  /** Drag events */
  onDrag?: React.DragEventHandler<T>;
  onDragStart?: React.DragEventHandler<T>;
  onDragOver?: React.DragEventHandler<T>;
  onDragEnter?: React.DragEventHandler<T>;
  onDragLeave?: React.DragEventHandler<T>;
  onDragEnd?: React.DragEventHandler<T>;
  onDrop?: React.DragEventHandler<T>;

  /** Clipboard events */
  onCopy?: React.ClipboardEventHandler<T>;
  onCut?: React.ClipboardEventHandler<T>;
  onPaste?: React.ClipboardEventHandler<T>;

  /** UI events */
  onScroll?: React.UIEventHandler<T>;

  /** Wheel events */
  onWheel?: React.WheelEventHandler<T>;

  /** Touch events */
  onTouchStart?: React.TouchEventHandler<T>;
  onTouchMove?: React.TouchEventHandler<T>;
  onTouchEnd?: React.TouchEventHandler<T>;
  onTouchCancel?: React.TouchEventHandler<T>;

  /** Animation events */
  onAnimationStart?: React.AnimationEventHandler<T>;
  onAnimationEnd?: React.AnimationEventHandler<T>;
  onAnimationIteration?: React.AnimationEventHandler<T>;

  /** Transition events */
  onTransitionEnd?: React.TransitionEventHandler<T>;
}
