"use client";

import React, { useState, useMemo, useCallback } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  Plus,
  Trash2,
  GripVertical,
  ChevronRight,
  ChevronDown,
  Type,
  Link as LinkIcon,
  ChevronUp,
  Layout,
  ExternalLink,
  Settings2,
  ArrowRight
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { NavItem } from '@/types';
import { availableIcons } from '@/lib/icon-utils';
import { flatten, unflatten, FlattenedItem } from '@/lib/tree-utils';

interface NavEditorProps {
  items: NavItem[];
  onChange: (items: NavItem[]) => void;
}

export default function NavEditor({ items, onChange }: NavEditorProps) {
  const flattenedItems = useMemo(() => flatten(items), [items]);
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const [activeId, setActiveId] = useState<string | null>(null);
  const activeItem = activeId ? flattenedItems.find((i) => i.id === activeId) : null;

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    setActiveId(null);

    if (active.id !== over.id) {
      const oldIndex = flattenedItems.findIndex((i) => i.id === active.id);
      const newIndex = flattenedItems.findIndex((i) => i.id === over.id);

      const newFlattened = arrayMove(flattenedItems, oldIndex, newIndex);
      
      // Basic vertical reordering. 
      // For the WordPress "nesting" feel, users can use the indent/outdent buttons in the item row.
      onChange(unflatten(newFlattened));
    }
  };

  const addItem = () => {
    const newItem: NavItem = {
      id: crypto.randomUUID(),
      title: 'New Menu Item',
      href: '#',
      type: 'link',
      children: [],
      details: []
    };
    onChange([...items, newItem]);
  };

  const updateItem = (id: string, updates: Partial<NavItem>) => {
    const newFlattened = flattenedItems.map(item => 
      item.id === id ? { ...item, ...updates } : item
    );
    onChange(unflatten(newFlattened as FlattenedItem[]));
  };

  const removeItem = (id: string) => {
    const newFlattened = flattenedItems.filter(item => item.id !== id);
    onChange(unflatten(newFlattened as FlattenedItem[]));
  };

  const moveItem = (id: string, direction: 'up' | 'down' | 'indent' | 'outdent') => {
    const index = flattenedItems.findIndex(i => i.id === id);
    if (index === -1) return;

    let newFlattened = [...flattenedItems];

    if (direction === 'up' && index > 0) {
      newFlattened = arrayMove(newFlattened, index, index - 1);
    } else if (direction === 'down' && index < newFlattened.length - 1) {
      newFlattened = arrayMove(newFlattened, index, index + 1);
    } else if (direction === 'indent' && index > 0) {
      // Nest under the item above
      const prevItem = newFlattened[index - 1];
      newFlattened[index] = { ...newFlattened[index], parentId: prevItem.id, depth: prevItem.depth + 1 };
    } else if (direction === 'outdent') {
      const current = newFlattened[index];
      if (current.parentId) {
        const parent = newFlattened.find(i => i.id === current.parentId);
        newFlattened[index] = { 
          ...current, 
          parentId: parent?.parentId || null, 
          depth: Math.max(0, current.depth - 1) 
        };
      }
    }

    onChange(unflatten(newFlattened as FlattenedItem[]));
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between border-b border-primary/10 pb-4">
        <div>
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">Menu Structure</h4>
          <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Drag each item into the order you prefer.</p>
        </div>
        <button 
          type="button"
          onClick={addItem}
          className="btn btn-sm bg-primary text-white border-none hover:bg-primary-hover flex items-center gap-2 px-4"
        >
          <Plus className="w-4 h-4" /> Add Item
        </button>
      </div>

      <DndContext 
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="space-y-2 select-none min-h-[100px] p-1">
          <SortableContext 
            items={flattenedItems.map(i => i.id)}
            strategy={verticalListSortingStrategy}
          >
            {flattenedItems.map((item) => (
              <SortableNavItem 
                key={item.id} 
                item={item} 
                onUpdate={(updates) => updateItem(item.id, updates)}
                onDelete={() => removeItem(item.id)}
                onMove={(dir) => moveItem(item.id, dir)}
              />
            ))}
          </SortableContext>
        </div>

        <DragOverlay dropAnimation={{
          sideEffects: defaultDropAnimationSideEffects({
            styles: {
              active: {
                opacity: '0.5',
              },
            },
          }),
        }}>
          {activeItem ? (
            <div className="flex items-center gap-3 bg-white p-3 rounded border-2 border-primary shadow-2xl opacity-90 cursor-grabbing">
              <GripVertical className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-slate-800">{activeItem.title}</span>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      {items.length === 0 && (
        <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50">
          <Menu className="w-12 h-12 text-slate-200 mx-auto mb-4" />
          <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Your menu is empty</p>
          <button onClick={addItem} className="mt-4 text-primary font-black uppercase text-xs hover:underline">Create your first item</button>
        </div>
      )}
    </div>
  );
}

function SortableNavItem({ item, onUpdate, onDelete, onMove }: { 
  item: FlattenedItem, 
  onUpdate: (updates: Partial<NavItem>) => void, 
  onDelete: () => void,
  onMove: (dir: 'up' | 'down' | 'indent' | 'outdent') => void
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: item.id });

  const [isExpanded, setIsExpanded] = useState(false);

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    marginLeft: `${item.depth * 32}px`,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      className={cn(
        "group touch-none",
        isDragging && "opacity-0"
      )}
    >
      <div className={cn(
        "flex items-center gap-3 bg-white p-3 border rounded shadow-sm transition-all relative overflow-hidden",
        isExpanded ? "border-primary/30 ring-1 ring-primary/5 shadow-md" : "border-slate-200 hover:border-primary/20",
        item.depth > 0 && "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary/10"
      )}>
        <div {...attributes} {...listeners} className="p-1 cursor-grab active:cursor-grabbing hover:bg-slate-50 rounded transition-colors">
          <GripVertical className="w-4 h-4 text-slate-400 group-hover:text-primary/40" />
        </div>
        
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 flex-grow cursor-pointer"
        >
          <span className="text-sm font-bold text-slate-800">{item.title}</span>
          <span className="text-[9px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 uppercase font-black tracking-tighter">
            {item.type || 'link'}
          </span>
          {item.parentId && (
            <span className="text-[8px] text-slate-300 font-bold uppercase">(sub item)</span>
          )}
        </div>

        <div className="flex items-center gap-1">
          <div className="flex items-center mr-2 border-r border-slate-100 pr-2 gap-1">
             <button type="button" onClick={() => onMove('outdent')} disabled={item.depth === 0} className="p-1.5 hover:bg-slate-100 text-slate-400 rounded disabled:opacity-20" title="Outdent">
              <ChevronUp className="w-3.5 h-3.5 -rotate-90" />
            </button>
            <button type="button" onClick={() => onMove('indent')} className="p-1.5 hover:bg-slate-100 text-slate-400 rounded" title="Indent">
              <ChevronUp className="w-3.5 h-3.5 rotate-90" />
            </button>
          </div>
          <button 
            type="button" 
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              "p-1.5 hover:bg-slate-100 rounded transition-transform duration-200",
              isExpanded ? "text-primary rotate-180" : "text-slate-400"
            )}
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-1 p-5 bg-slate-50/50 border border-slate-200 rounded-lg space-y-5 animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Navigation Label</label>
              <div className="relative">
                <Type className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input 
                  value={item.title}
                  onChange={(e) => onUpdate({ title: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-md focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">URL / Href</label>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input 
                  value={item.href}
                  onChange={(e) => onUpdate({ href: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-md focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 pt-2">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider flex items-center gap-2">
                <Layout className="w-3 h-3" /> Layout Type
              </label>
              <select 
                value={item.type}
                onChange={(e) => onUpdate({ type: e.target.value as any })}
                className="w-full px-3 py-2.5 text-sm bg-white border border-slate-200 rounded-md focus:border-primary outline-none transition-all appearance-none cursor-pointer font-medium"
              >
                <option value="link">Simple Link</option>
                <option value="dropdown">Standard Dropdown</option>
                <option value="megamenu">Megamenu (Advanced)</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                <Settings2 className="w-3 h-3" /> Menu Icon
              </label>
              <select 
                value={item.icon || ''}
                onChange={(e) => onUpdate({ icon: e.target.value })}
                className="w-full px-3 py-2.5 text-sm bg-white border border-slate-200 rounded-md focus:border-primary outline-none transition-all appearance-none cursor-pointer font-medium"
              >
                <option value="">No Icon</option>
                {availableIcons.map(iconName => (
                  <option key={iconName} value={iconName}>{iconName}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-slate-200">
            <label className="text-[10px] font-black uppercase text-slate-400 flex justify-between items-center tracking-wider">
              Feature Details List
              <span className="text-[8px] font-normal lowercase">(For Megamenu sub-items | One per line)</span>
            </label>
            <textarea 
              value={item.details?.join('\n') || ''}
              onChange={(e) => onUpdate({ details: e.target.value.split('\n').filter(Boolean) })}
              rows={4}
              className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-md focus:border-primary outline-none transition-all resize-none shadow-inner"
              placeholder="Premium Support&#10;Unlimited Revisions&#10;Source Files Included"
            />
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            <button 
              type="button" 
              onClick={onDelete}
              className="text-[10px] font-black uppercase text-rose-500 hover:text-rose-600 flex items-center gap-1.5 transition-colors"
            >
              <Trash2 className="w-3 h-3" /> Remove Item
            </button>
            <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              <span>Depth: {item.depth}</span>
              <span className="w-1 h-1 bg-slate-200 rounded-full" />
              <span>Position: {item.index + 1}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Menu(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
