"use client";

import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  GripVertical, 
  ChevronRight, 
  ChevronDown, 
  Type, 
  Link as LinkIcon, 
  Square as SquareIcon 
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { NavItem } from '@/types';
import { availableIcons, getIcon } from '@/lib/icon-utils';

interface NavEditorProps {
  items: NavItem[];
  onChange: (items: NavItem[]) => void;
}

export default function NavEditor({ items, onChange }: NavEditorProps) {
  const addItem = (parentId: string | null = null) => {
    const newItem: NavItem = {
      title: 'New Item',
      href: '#',
      type: 'link',
      children: [],
      details: []
    };

    if (parentId === null) {
      onChange([...items, newItem]);
    } else {
      const updateChildren = (list: NavItem[]): NavItem[] => {
        return list.map(item => {
          if (item.title === parentId) { // Using title as a simple ID for now
            return { ...item, children: [...(item.children || []), newItem] };
          }
          if (item.children) {
            return { ...item, children: updateChildren(item.children) };
          }
          return item;
        });
      };
      onChange(updateChildren(items));
    }
  };

  const removeItem = (title: string) => {
    const filterList = (list: NavItem[]): NavItem[] => {
      return list
        .filter(item => item.title !== title)
        .map(item => ({
          ...item,
          children: item.children ? filterList(item.children) : []
        }));
    };
    onChange(filterList(items));
  };

  const updateItem = (title: string, updates: Partial<NavItem>) => {
    const mapList = (list: NavItem[]): NavItem[] => {
      return list.map(item => {
        if (item.title === title) {
          return { ...item, ...updates };
        }
        if (item.children) {
          return { ...item, children: mapList(item.children) };
        }
        return item;
      });
    };
    onChange(mapList(items));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold text-slate-800 uppercase tracking-tight">Main Navigation Items</h4>
        <button 
          type="button"
          onClick={() => addItem()}
          className="btn btn-xs bg-primary text-white border-none hover:bg-primary-hover flex items-center gap-1"
        >
          <Plus className="w-3 h-3" /> Add Link
        </button>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <NavItemRow 
            key={index} 
            item={item} 
            onUpdate={(updates) => updateItem(item.title, updates)}
            onDelete={() => removeItem(item.title)}
            onAddChild={() => addItem(item.title)}
          />
        ))}
      </div>
    </div>
  );
}

function NavItemRow({ item, onUpdate, onDelete, onAddChild, level = 0 }: { 
  item: NavItem, 
  onUpdate: (updates: Partial<NavItem>) => void, 
  onDelete: () => void,
  onAddChild: () => void,
  level?: number 
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={cn("space-y-2", level > 0 && "ml-6 border-l-2 border-slate-100 pl-4")}>
      <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200 group">
        <GripVertical className="w-4 h-4 text-slate-300 cursor-grab" />
        
        <button 
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 flex-grow text-left"
        >
          {item.children && item.children.length > 0 ? (
            isExpanded ? <ChevronDown className="w-4 h-4 text-primary" /> : <ChevronRight className="w-4 h-4 text-slate-400" />
          ) : (
             <div className="w-4" />
          )}
          <span className="text-sm font-bold text-slate-700">{item.title}</span>
          <span className="text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-500 uppercase font-black">{item.type || 'link'}</span>
        </button>

        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button type="button" onClick={onAddChild} className="p-1.5 hover:bg-primary/10 text-primary rounded transition-colors" title="Add Submenu">
            <Plus className="w-4 h-4" />
          </button>
          <button type="button" onClick={onDelete} className="p-1.5 hover:bg-red-50 text-red-500 rounded transition-colors" title="Delete">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-4 shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-slate-400">Title</label>
              <div className="relative">
                <Type className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                <input 
                  value={item.title}
                  onChange={(e) => onUpdate({ title: e.target.value })}
                  className="w-full pl-8 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded focus:border-primary outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-slate-400">Href</label>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                <input 
                  value={item.href}
                  onChange={(e) => onUpdate({ href: e.target.value })}
                  className="w-full pl-8 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded focus:border-primary outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-slate-400">Menu Type</label>
              <select 
                value={item.type}
                onChange={(e) => onUpdate({ type: e.target.value as any })}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded focus:border-primary outline-none transition-all appearance-none"
              >
                <option value="link">Simple Link</option>
                <option value="dropdown">Standard Dropdown</option>
                <option value="megamenu">Megamenu (Advanced)</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-slate-400">Icon (Lucide)</label>
              <select 
                value={item.icon as string || ''}
                onChange={(e) => onUpdate({ icon: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded focus:border-primary outline-none transition-all"
              >
                <option value="">No Icon</option>
                {availableIcons.map(iconName => (
                  <option key={iconName} value={iconName}>{iconName}</option>
                ))}
              </select>
            </div>
          </div>

          {item.type === 'megamenu' && (
             <div className="space-y-2 pt-2 border-t border-slate-100">
               <label className="text-[10px] font-black uppercase text-slate-400 flex justify-between items-center">
                 Feature Details List
                 <span className="text-[8px] font-normal lowercase">(One per line)</span>
               </label>
               <textarea 
                  value={item.details?.join('\n')}
                  onChange={(e) => onUpdate({ details: e.target.value.split('\n').filter(Boolean) })}
                  rows={3}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded focus:border-primary outline-none transition-all resize-none"
                  placeholder="Feature 1&#10;Feature 2"
               />
             </div>
          )}

          {item.children && item.children.length > 0 && (
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-3">
                 <label className="text-[10px] font-black uppercase text-slate-400">Submenu Items</label>
                 <button 
                  type="button"
                  onClick={onAddChild}
                  className="text-[10px] font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <Plus className="w-2.5 h-2.5" /> Add Sub-item
                </button>
              </div>
              <div className="space-y-3">
                {item.children.map((child, idx) => (
                  <NavItemRow 
                    key={idx}
                    item={child}
                    level={level + 1}
                    onUpdate={(updates) => {
                       const newChildren = [...(item.children || [])];
                       newChildren[idx] = { ...child, ...updates };
                       onUpdate({ children: newChildren });
                    }}
                    onDelete={() => {
                        const newChildren = (item.children || []).filter((_, i) => i !== idx);
                        onUpdate({ children: newChildren });
                    }}
                    onAddChild={() => {
                         const addChildToNested = (list: NavItem[], targetTitle: string): NavItem[] => {
                            return list.map(i => {
                              if (i.title === targetTitle) {
                                return { ...i, children: [...(i.children || []), { title: 'New Sub-item', href: '#', type: 'link', children: [], details: [] }] };
                              }
                              if (i.children) return { ...i, children: addChildToNested(i.children, targetTitle) };
                              return i;
                            });
                         };
                         onUpdate({ children: addChildToNested(item.children || [], child.title) });
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
