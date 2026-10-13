/**
 * Emscripten virtual filesystem.
 *
 * Provides POSIX-like file operations on the in-memory filesystem backing the
 * WASM module. Use this to load CAD files (STEP, IGES, BREP) into the WASM heap
 * before processing, and to retrieve output files after export.
 *
 * @see {@link https://emscripten.org/docs/api_reference/Filesystem-API.html | Emscripten FS API}
 */
export declare namespace FS {
  /** Result of a path lookup containing the resolved node. */
  interface Lookup {
      path: string;
      node: FSNode;
  }

  /** Opaque handle to an open file stream. */
  type FSStream = unknown;
  /** Opaque handle to a filesystem node (file, directory, or device). */
  type FSNode = unknown;
  /** Error thrown by FS operations with an Emscripten errno code. */
  type ErrnoError = unknown;

  /** When `true`, permission checks are bypassed for all FS operations. */
  let ignorePermissions: boolean;
  let trackingDelegate: any;
  let tracking: any;
  let genericErrors: any;

  /**
   * Resolve a path to its filesystem node, optionally following symlinks.
   *
   * @param path - The absolute or relative path to resolve.
   * @param opts - Lookup options (e.g. `{ follow: true }`).
   * @returns The resolved path and filesystem node.
   */
  function lookupPath(path: string, opts: any): Lookup;
  /**
   * Get the absolute path for a filesystem node.
   *
   * @param node - The filesystem node.
   * @returns The absolute path string.
   */
  function getPath(node: FSNode): string;

  /**
   * Check whether the mode bits indicate a regular file.
   *
   * @param mode - The st_mode value from `stat`.
   * @returns `true` if the mode represents a regular file.
   */
  function isFile(mode: number): boolean;
  /**
   * Check whether the mode bits indicate a directory.
   *
   * @param mode - The st_mode value from `stat`.
   * @returns `true` if the mode represents a directory.
   */
  function isDir(mode: number): boolean;
  /**
   * Check whether the mode bits indicate a symbolic link.
   *
   * @param mode - The st_mode value from `stat`.
   * @returns `true` if the mode represents a symbolic link.
   */
  function isLink(mode: number): boolean;
  /**
   * Check whether the mode bits indicate a character device.
   *
   * @param mode - The st_mode value from `stat`.
   * @returns `true` if the mode represents a character device.
   */
  function isChrdev(mode: number): boolean;
  /**
   * Check whether the mode bits indicate a block device.
   *
   * @param mode - The st_mode value from `stat`.
   * @returns `true` if the mode represents a block device.
   */
  function isBlkdev(mode: number): boolean;
  /**
   * Check whether the mode bits indicate a FIFO (named pipe).
   *
   * @param mode - The st_mode value from `stat`.
   * @returns `true` if the mode represents a FIFO.
   */
  function isFIFO(mode: number): boolean;
  /**
   * Check whether the mode bits indicate a socket.
   *
   * @param mode - The st_mode value from `stat`.
   * @returns `true` if the mode represents a socket.
   */
  function isSocket(mode: number): boolean;

  /**
   * Extract the major device number from a device identifier.
   *
   * @param dev - The combined device identifier.
   * @returns The major device number.
   */
  function major(dev: number): number;
  /**
   * Extract the minor device number from a device identifier.
   *
   * @param dev - The combined device identifier.
   * @returns The minor device number.
   */
  function minor(dev: number): number;
  /**
   * Combine major and minor numbers into a device identifier.
   *
   * @param ma - The major device number.
   * @param mi - The minor device number.
   * @returns The combined device identifier.
   */
  function makedev(ma: number, mi: number): number;
  /**
   * Register a device driver for the given device identifier.
   *
   * @param dev - The combined device identifier.
   * @param ops - Device operation callbacks (read, write, etc.).
   */
  function registerDevice(dev: number, ops: any): void;

  /**
   * Persist or restore the virtual filesystem to/from a backing store.
   *
   * @param populate - When `true`, loads data from the backing store into memory;
   *   when `false`, writes in-memory data to the backing store.
   * @param callback - Called on completion with an optional error.
   */
  function syncfs(populate: boolean, callback: (e: any) => any): void;
  /**
   * Persist or restore the virtual filesystem (callback-first overload).
   *
   * @param callback - Called on completion with an optional error.
   * @param populate - When `true`, loads from backing store (defaults to `false`).
   */
  function syncfs(callback: (e: any) => any, populate?: boolean): void;
  /**
   * Mount a filesystem type at the given mountpoint.
   *
   * @param type - The filesystem type (e.g. `MEMFS`, `IDBFS`).
   * @param opts - Mount options passed to the filesystem driver.
   * @param mountpoint - The path at which to mount.
   * @returns The mount record.
   */
  function mount(type: any, opts: any, mountpoint: string): any;
  /**
   * Unmount the filesystem at the given mountpoint.
   *
   * @param mountpoint - The path to unmount.
   */
  function unmount(mountpoint: string): void;

  /**
   * Create a directory in the virtual filesystem.
   *
   * @param path - The directory path to create.
   * @param mode - Optional POSIX permission bits (default `0o777`).
   * @returns The created directory node.
   */
  function mkdir(path: string, mode?: number): any;
  /**
   * Create a device node in the virtual filesystem.
   *
   * @param path - The path for the device node.
   * @param mode - Optional POSIX permission bits.
   * @param dev - Optional device identifier (from `makedev`).
   * @returns The created device node.
   */
  function mkdev(path: string, mode?: number, dev?: number): any;
  /**
   * Create a symbolic link.
   *
   * @param oldpath - The target path the symlink points to.
   * @param newpath - The path of the symlink itself.
   * @returns The created symlink node.
   */
  function symlink(oldpath: string, newpath: string): any;
  /**
   * Rename (move) a file or directory.
   *
   * @param old_path - The current path.
   * @param new_path - The new path.
   */
  function rename(old_path: string, new_path: string): void;
  /**
   * Remove an empty directory.
   *
   * @param path - The directory to remove.
   */
  function rmdir(path: string): void;
  /**
   * List entries in a directory.
   *
   * @param path - The directory path.
   * @returns Array of entry names (including `.` and `..`).
   */
  function readdir(path: string): any;
  /**
   * Remove a file.
   *
   * @param path - The file to remove.
   */
  function unlink(path: string): void;
  /**
   * Read the target of a symbolic link.
   *
   * @param path - The symlink path.
   * @returns The target path the symlink points to.
   */
  function readlink(path: string): string;
  /**
   * Get file status (size, mode, timestamps, etc.).
   *
   * @param path - The file path.
   * @param dontFollow - When `true`, returns the symlink's own status instead of the target's.
   * @returns An object with POSIX stat fields.
   */
  function stat(path: string, dontFollow?: boolean): any;
  /**
   * Like `stat`, but always returns the symlink's own status.
   *
   * @param path - The file path.
   * @returns An object with POSIX stat fields.
   */
  function lstat(path: string): any;
  /**
   * Change file permission bits.
   *
   * @param path - The file path.
   * @param mode - The new POSIX permission bits.
   * @param dontFollow - When `true`, changes the symlink itself rather than its target.
   */
  function chmod(path: string, mode: number, dontFollow?: boolean): void;
  /**
   * Change permission bits of a symbolic link itself.
   *
   * @param path - The symlink path.
   * @param mode - The new POSIX permission bits.
   */
  function lchmod(path: string, mode: number): void;
  /**
   * Change permission bits of an open file descriptor.
   *
   * @param fd - The file descriptor.
   * @param mode - The new POSIX permission bits.
   */
  function fchmod(fd: number, mode: number): void;
  /**
   * Change file ownership.
   *
   * @param path - The file path.
   * @param uid - The new user ID.
   * @param gid - The new group ID.
   * @param dontFollow - When `true`, changes the symlink itself rather than its target.
   */
  function chown(path: string, uid: number, gid: number, dontFollow?: boolean): void;
  /**
   * Change ownership of a symbolic link itself.
   *
   * @param path - The symlink path.
   * @param uid - The new user ID.
   * @param gid - The new group ID.
   */
  function lchown(path: string, uid: number, gid: number): void;
  /**
   * Change ownership of an open file descriptor.
   *
   * @param fd - The file descriptor.
   * @param uid - The new user ID.
   * @param gid - The new group ID.
   */
  function fchown(fd: number, uid: number, gid: number): void;
  /**
   * Truncate a file to a specified length.
   *
   * @param path - The file path.
   * @param len - The new length in bytes.
   */
  function truncate(path: string, len: number): void;
  /**
   * Truncate an open file descriptor to a specified length.
   *
   * @param fd - The file descriptor.
   * @param len - The new length in bytes.
   */
  function ftruncate(fd: number, len: number): void;
  /**
   * Update access and modification timestamps of a file.
   *
   * @param path - The file path.
   * @param atime - The new access time (seconds since epoch).
   * @param mtime - The new modification time (seconds since epoch).
   */
  function utime(path: string, atime: number, mtime: number): void;
  /**
   * Open a file and return a stream handle.
   *
   * @param path - The file path.
   * @param flags - POSIX open flags as a string (e.g. `'r'`, `'w'`, `'a'`).
   * @param mode - Optional permission bits for newly created files.
   * @param fd_start - Optional starting file descriptor number.
   * @param fd_end - Optional ending file descriptor number.
   * @returns The opened file stream.
   */
  function open(path: string, flags: string, mode?: number, fd_start?: number, fd_end?: number): FSStream;
  /**
   * Close an open file stream.
   *
   * @param stream - The stream to close.
   */
  function close(stream: FSStream): void;
  /**
   * Reposition the read/write offset of a stream.
   *
   * @param stream - The open file stream.
   * @param offset - The byte offset.
   * @param whence - The reference point (`0` = start, `1` = current, `2` = end).
   * @returns The resulting absolute offset.
   */
  function llseek(stream: FSStream, offset: number, whence: number): any;
  /**
   * Read bytes from a stream into a buffer.
   *
   * @param stream - The open file stream.
   * @param buffer - The destination buffer.
   * @param offset - The byte offset within `buffer` to start writing.
   * @param length - Maximum number of bytes to read.
   * @param position - Optional absolute file offset to read from.
   * @returns The number of bytes actually read.
   */
  function read(stream: FSStream, buffer: ArrayBufferView, offset: number, length: number, position?: number): number;
  /**
   * Write bytes from a buffer to a stream.
   *
   * @param stream - The open file stream.
   * @param buffer - The source buffer.
   * @param offset - The byte offset within `buffer` to start reading.
   * @param length - Number of bytes to write.
   * @param position - Optional absolute file offset to write at.
   * @param canOwn - When `true`, Emscripten may take ownership of the buffer.
   * @returns The number of bytes actually written.
   */
  function write(
      stream: FSStream,
      buffer: ArrayBufferView,
      offset: number,
      length: number,
      position?: number,
      canOwn?: boolean,
  ): number;
  /**
   * Pre-allocate storage for a file region.
   *
   * @param stream - The open file stream.
   * @param offset - Starting byte offset.
   * @param length - Number of bytes to allocate.
   */
  function allocate(stream: FSStream, offset: number, length: number): void;
  /**
   * Memory-map a region of a file.
   *
   * @param stream - The open file stream.
   * @param buffer - The target buffer view.
   * @param offset - Byte offset in the buffer.
   * @param length - Length of the mapping in bytes.
   * @param position - Byte offset in the file.
   * @param prot - Memory protection flags.
   * @param flags - Mapping flags.
   * @returns The mapped memory region.
   */
  function mmap(
      stream: FSStream,
      buffer: ArrayBufferView,
      offset: number,
      length: number,
      position: number,
      prot: number,
      flags: number,
  ): any;
  /**
   * Perform a device-specific I/O control operation.
   *
   * @param stream - The open file stream.
   * @param cmd - The ioctl command.
   * @param arg - The command argument.
   * @returns The ioctl result.
   */
  function ioctl(stream: FSStream, cmd: any, arg: any): any;
  /**
   * Read an entire file as a `Uint8Array` (binary mode).
   *
   * @param path - The file path.
   * @param opts - Options with `encoding: 'binary'`.
   * @returns The file contents as raw bytes.
   */
  function readFile(path: string, opts: { encoding: 'binary'; flags?: string }): Uint8Array;
  /**
   * Read an entire file as a UTF-8 string.
   *
   * @param path - The file path.
   * @param opts - Options with `encoding: 'utf8'`.
   * @returns The file contents as a string.
   */
  function readFile(path: string, opts: { encoding: 'utf8'; flags?: string }): string;
  /**
   * Read an entire file (defaults to binary `Uint8Array`).
   *
   * @param path - The file path.
   * @param opts - Optional flags.
   * @returns The file contents as raw bytes.
   */
  function readFile(path: string, opts?: { flags?: string }): Uint8Array;
  /**
   * Write data to a file, creating it if it does not exist.
   *
   * @param path - The file path.
   * @param data - The content to write (string or binary buffer).
   * @param opts - Optional flags.
   */
  function writeFile(path: string, data: string | ArrayBufferView, opts?: { flags?: string }): void;

  /**
   * Get the current working directory.
   *
   * @returns The absolute path of the current working directory.
   */
  function cwd(): string;
  /**
   * Change the current working directory.
   *
   * @param path - The directory to switch to.
   */
  function chdir(path: string): void;
  /**
   * Initialize the standard I/O streams (stdin, stdout, stderr).
   *
   * @param input - Callback supplying characters for stdin, or `null` for default.
   * @param output - Callback receiving characters from stdout, or `null` for default.
   * @param error - Callback receiving characters from stderr, or `null` for default.
   */
  function init(
      input: null | (() => number | null),
      output: null | ((c: number) => any),
      error: null | ((c: number) => any),
  ): void;

  /**
   * Create a file that is lazily fetched from a URL on first read.
   *
   * @param parent - The parent directory path or node.
   * @param name - The filename.
   * @param url - The URL to fetch the content from.
   * @param canRead - Whether the file is readable.
   * @param canWrite - Whether the file is writable.
   * @returns The created filesystem node.
   */
  function createLazyFile(
      parent: string | FSNode,
      name: string,
      url: string,
      canRead: boolean,
      canWrite: boolean,
  ): FSNode;
  /**
   * Create a file that is preloaded (fetched and stored) before the program runs.
   *
   * @param parent - The parent directory path or node.
   * @param name - The filename.
   * @param url - The URL to fetch the content from.
   * @param canRead - Whether the file is readable.
   * @param canWrite - Whether the file is writable.
   * @param onload - Optional callback on successful load.
   * @param onerror - Optional callback on load failure.
   * @param dontCreateFile - When `true`, skips creating the file node.
   * @param canOwn - When `true`, the runtime may take ownership of the data.
   */
  function createPreloadedFile(
      parent: string | FSNode,
      name: string,
      url: string,
      canRead: boolean,
      canWrite: boolean,
      onload?: () => void,
      onerror?: () => void,
      dontCreateFile?: boolean,
      canOwn?: boolean,
  ): void;
  /**
   * Create a file from in-memory data.
   *
   * @param parent - The parent directory path or node.
   * @param name - The filename.
   * @param data - The file contents.
   * @param canRead - Whether the file is readable.
   * @param canWrite - Whether the file is writable.
   * @param canOwn - When `true`, the runtime may take ownership of the data.
   * @returns The created filesystem node.
   */
  function createDataFile(
      parent: string | FSNode,
      name: string,
      data: ArrayBufferView | string,
      canRead: boolean,
      canWrite: boolean,
      canOwn: boolean,
  ): FSNode;
  /** Result of analyzing a filesystem path for existence and parent resolution. */
  interface AnalysisResults {
    isRoot: boolean,
    exists: boolean,
    error: Error,
    name: string,
    path: any,
    object: any,
    parentExists: boolean,
    parentPath: any,
    parentObject: any
  }
  /**
   * Analyze a path to determine existence, parent information, and errors.
   *
   * @param path - The path to analyze.
   * @returns Detailed information about the path's resolution.
   */
  function analyzePath(path: string): AnalysisResults;
}
