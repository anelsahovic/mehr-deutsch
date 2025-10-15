import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { colorVariants } from '../data/constants';

interface Props {
  name: string;
  examples: string[];
  exceptions: string[];
  color: 'blue' | 'rose' | 'green';
}

export default function CollapsibleNounGenderDetails({
  name,
  examples,
  exceptions,
  color,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={`rounded-lg ${
        isOpen && `border-2 ${colorVariants[color].border}`
      }`}
    >
      <CollapsibleTrigger
        className={`w-full flex justify-between items-center py-3 px-5 bg-gray-100 rounded-lg cursor-pointer 
        focus:outline-none focus:ring-2 ${
          colorVariants[color].ring
        } hover:ring-2 border border-gray-300 transition-all duration-300 text-lg font-semibold text-gray-800 ${
          isOpen && 'rounded-b-none'
        } `}
      >
        <span>{name}</span>
        <ChevronDown
          className={`w-6 h-6 ${
            colorVariants[color].text
          }  transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          aria-hidden="true"
        />
      </CollapsibleTrigger>

      <CollapsibleContent className="bg-white p-5 rounded-b-lg border-t border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          <div>
            <h4 className={`${colorVariants[color].text}  font-semibold mb-2`}>
              Examples
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`${colorVariants[color].text}  font-semibold mb-2`}>
              Exceptions
            </h4>
            {exceptions.length > 0 ? (
              <ul className="list-disc list-inside space-y-1 text-gray-600 italic max-w-[90%]">
                {exceptions.map((exception) => (
                  <li key={exception}>{exception}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 italic">None</p>
            )}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
