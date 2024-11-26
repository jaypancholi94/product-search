import { PackageX } from 'lucide-react';
import React, { memo } from 'react';

const NoResult: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <PackageX size={64} role="icon" className="text-gray-400" />
      <h2 className="text-2xl text-gray-400">No Product Found</h2>
    </div>
  );
};

const MemoizedNoResult = memo(NoResult);

NoResult.displayName = 'NoResult';

export { MemoizedNoResult as NoResult };
